import React from 'react'; 
import Button from './components/button';

import './App.css';
import './styles/index.scss';
import './styles/utilities/screen.scss';
import './styles/utilities/modal.scss'; 


function App() {
	
	const [modalIsOpen, setIsOpen] = React.useState(false); 
 
	return (
	<div className="App">
		<article>
			<header>
				<p>Nando<br/>Coding challenge<br/>UI component</p>
				<p>Rob Bradley<br />paraxia@hotmail.com</p>
			</header>
			<section>
				<p>Button element - Standard</p>
				<p><i>In production, I might opt to use a new ACTION tsx object instead of a standard button that could consume ANY kind of html element to have the same functionality, obviously encapsulating an href tag but that would require fine tuning for accessibility.</i></p>
				<p><i>hover states needed etc</i></p>
				<Button onClick={() => setIsOpen(!modalIsOpen)}>
					Open Modal
				</Button>

				<Button size="sm" onClick={() => setIsOpen(!modalIsOpen)}>
					Open Modal [small]
				</Button>

				<Button disabled={true} size="sm" onClick={() => setIsOpen(!modalIsOpen)}>
					Open Modal [disabled, small]
				</Button>
			</section>

			{/* also need to lift modalIsOpen state to toggle body tag overflow: hidden when active to eliminate scrollbar */}
			{/* needs to move to MODAL.tsx */}
			
			<div className={`u-screen ${modalIsOpen ? "active" : ""}`} >
				{/* consider accessibility plugin https://react-spectrum.adobe.com/react-aria/Modal.html */}
				<dialog className="u-modal" aria-modal aria-labelledby="Modal title" tabIndex={-1} role="dialog"> 
					
					<h2>Modal title</h2>
					<p>This is a modal</p>

					<Button onClick={() => setIsOpen(!modalIsOpen)} aria-label="Close">Close Modal </Button>
					<Button size="sm" disabled={true} onClick={() => setIsOpen(!modalIsOpen)}>Close Modal [disabled, small] </Button>
				</dialog>
			</div>
		</article>
	</div>
	); 
}

export default App;
