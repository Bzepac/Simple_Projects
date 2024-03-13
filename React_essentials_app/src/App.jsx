import { CORE_CONCEPTS } from "./data";
import Header from "./components/header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";
function App() {
  const [tabContent, setTabContent] = useState();
  function handleSelect(selectedButton) {
    setTabContent(selectedButton);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
            <CoreConcept
              key={conceptItem.title}
              title={conceptItem.title}
              description={conceptItem.description}
              img={conceptItem.image}
            ></CoreConcept>
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <li>
            <TabButton
              isSelected={tabContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
          </li>
          <li>
            <TabButton
              isSelected={tabContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
          </li>
          <li>
            <TabButton
              isSelected={tabContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
          </li>
          <li>
            <TabButton
              isSelected={tabContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </li>
        </menu>

        {!tabContent && <p>Please select a topic.</p>}
        {tabContent && (
          <div id="tab-content">
            {" "}
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>{EXAMPLES[tabContent].code}</code>
            </pre>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
