import React from "react";
import { useState } from "react";

//create your first component
function Home() {
	const [input, setInput] = useState('');
	const [chores, setChores] = useState([]);

	const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setChores([...chores, [input]]);
            setInput('');
        }
    };

	const handleDelete = (indexToDelete) => {
        setChores(chores.filter((_, index) => index !== indexToDelete));
    };
	

	return (
		<div className="text-center">
			<input type="text"
				onChange={event => setInput(event.target.value)}
				value={input}
				onKeyDown={handleKeyDown} />
			<ul>
				{chores.map((chore, index) => (
					<li key={index}>
						{chore}
						<button onClick={() => handleDelete(index)}>X</button>
						</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
