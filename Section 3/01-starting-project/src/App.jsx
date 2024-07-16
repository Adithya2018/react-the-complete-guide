import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import TabContent from './components/TabContent/TabContent.jsx';

function App() {
	const [selectedTopic, setSelectedTopic] = useState();

	function handleSelect(selectedButton) {
		// selectedButton => 'components', 'jsx', 'props', 'state'
		setSelectedTopic(selectedButton);
	}

	console.log('App component executing...');

	return (
		<div>
			<Header />
			<main>
				<section id="core-concepts">
					<ul>
						{CORE_CONCEPTS.map((core_concept_item) => (
							<CoreConcept
								key={core_concept_item.title}
								{...core_concept_item}
							/>
						))}
					</ul>
				</section>
				<section id="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							isSelected={selectedTopic === 'components'}
							onSelect={() => handleSelect('components')}>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'jsx'}
							onSelect={() => handleSelect('jsx')}>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'props'}
							onSelect={() => handleSelect('props')}>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTopic === 'state'}
							onSelect={() => handleSelect('state')}>
							State
						</TabButton>
					</menu>
					{selectedTopic && (
						<TabContent selectedTopic={selectedTopic} />
					)}
					{!selectedTopic && <p>Please select a topic.</p>}
				</section>
			</main>
		</div>
	);
}

export default App;
