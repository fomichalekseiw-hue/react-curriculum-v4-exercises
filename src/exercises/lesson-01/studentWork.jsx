//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Aleksei';

  const birthdate = new Date('1987-02-24');
  const today = new Date();
  let age =
    today.getFullYear() -
    birthdate.getFullYear() -
    (today <
    new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate())
      ? 1
      : 0);

  const hobbies = ['Programming', 'Travel', 'Sport'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        My name is {name} and I am {age} years old. I enjoy learning new
        technologies, and spending time with my family.
      </p>

      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
