import profilePic from './assets/345678.png'

function Card(){
return(
<div className="card">
<img className="card-image" alt="Brothers wHAT THE HELL YOU WANT IT" src={profilePic}></img>
<h2 className="Card-title">Bro Name</h2>
<p className='Card-text'> I teching on youtube</p>
</div>
);
}

export default Card