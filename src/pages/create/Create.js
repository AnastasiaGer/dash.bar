import "./Create.css";
import Header from "../../components/Header/Header";
import { useState, useEffect } from "react";
import Select from "react-select";
import { useCollection } from '../../hooks/useCollection'
import { useAuthContext } from '../../hooks/useAuthContext'
import { timestamp } from '../../firebase/config'
import { useFirestore } from '../../hooks/useFirestore'
import { useNavigate } from 'react-router'


const categories = [
  { value: "development", label: "Development" },
  { value: "design", label: "Design" },
  { value: "sales", label: "Sales" },
  { value: "marketing", label: "Marketing" },
];

const priorities = [
  { value: "heights", label: "Heights" },
  { value: "heigh", label: "Heigh" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];
export default function Create() {
  const navigate = useNavigate()
  const { addDocument, response } = useFirestore('projects')
  const { user } = useAuthContext()
  const { documents } = useCollection('users')
  const [users, setUsers] = useState([])


  // form field values
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);
  // const [attachment, setAttachment] = useState(null);
  // const [attachmentError, setAttachmentError] = useState(null);
  const [formError, setFormError] = useState(null);

    // create user values for react-select
    useEffect(() => {
      if(documents) {
        setUsers(documents.map(user => {
          return { value: {...user, id: user.id}, label: user.displayName }
        }))
      }
    }, [documents])

  // const handleFileChange = (e) => {
  //   setAttachment(null);
  //   let selected = e.target.files[0];
  //   console.log(selected);

  //   if (!selected) {
  //     setAttachmentError("Please select a file");
  //     return;
  //   }
  //   if (!selected.type.includes("image")) {
  //     setAttachmentError("Selected file must be an image");
  //     return;
  //   }
  //   if (selected.size > 3000000) {
  //     setAttachmentError("Image file size must be less than 3Mb");
  //     return;
  //   }

  //   setAttachmentError(null);
  //   setAttachment(selected);
  //   console.log("file updated");
  // };

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormError(null)

    if (!category) {
      setFormError('Please select a task category.')
      return
    }
    if (!priority) {
      setFormError('Please select a task priority.')
      return
    }
    if (assignedUsers.length < 1) {
      setFormError('Please assign the task to at least 1 user')
      return
    }

    const assignedUsersList = assignedUsers.map(u => {
      return { 
        displayName: u.value.displayName, 
        photoURL: u.value.photoURL,
        id: u.value.id
      }
    })
    const createdBy = { 
      displayName: user.displayName, 
      photoURL: user.photoURL,
      id: user.uid
    }

    const task = {
      name,
      details,
      assignedUsersList, 
      createdBy,
      category: category.value,
      priority: priority.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: []
    }

    await addDocument(task)
    if (!response.error) {
      navigate('/');
    }
  }
  return (
    <div className="create">
      <Header title="Project Management" />
      <div className="create-form">
        <h2 className="create-title">Create new Task</h2>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Task Name:</span>
            <input
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <span>Task Details:</span>
            <textarea
              required
              type="text"
              onChange={(e) => setDetails(e.target.value)}
              value={details}
            ></textarea>
          </label>
          <label>
            <span>Set due date:</span>
            <input
              required
              type="date"
              onChange={(e) => setDueDate(e.target.value)}
              value={dueDate}
            />
          </label>
          <label>
            <span>Task Category:</span>
            <Select
              onChange={(option) => setCategory(option)}
              options={categories}
            />
          </label>
          <label>
            <span>Task Priority:</span>
            <Select
              onChange={(option) => setPriority(option)}
              options={priorities}
            />
          </label>
          <label>
          <span>Assign to:</span>
          <Select
            onChange={(option) => setAssignedUsers(option)}
            options={users}
            isMulti
          />
        </label>
          {/* <label>
            <span>Attachment:</span>
            <input type="file" onChange={handleFileChange} />
            {attachmentError && <div className="error">{attachmentError}</div>}
          </label> */}
          <button className="btn create-btn">Add Task To Board</button>

          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
}
