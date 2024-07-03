import './students.css';
const Students = (props) => {
    const studentData = props.data;
    return (
        <div className="student_card">
       <div>
        {props.data.title ? <>
        <h2 style={{color:"green"}}>titles</h2>
        <h3>{props.data.title}</h3>
        </>: <>
        <p><span>Student Name:</span><span>{studentData.name}</span></p>
        <p><span>Email:</span><span>{studentData.email}</span></p>
        </>}
       </div>
        </div>
    )
};
export default Students;