import './Feedback.css';

const Feedback = () => (
<div className='feedbg'>
  <body>
  <div className="containerf">
    <h1>What Do You Think About Us ?</h1>
    <form action="#" method="post">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required />
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      
      <label htmlFor="feedback">Feedback:</label>
      <textarea id="feedback" name="feedback" rows="3" required></textarea>
      
      <button type="submit">Submit Feedback</button>
    </form>
  </div>
  </body>
  </div>
);

export default Feedback;
