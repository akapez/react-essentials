import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";
import Place from "./Place";

import savannaImg from './assets/african-savanna.jpg';
import amazonImg from './assets/amazon-river.jpg';
import caribbeanImg from './assets/caribbean-beach.jpg';
import desertImg from './assets/desert-dunes.jpg';
import forestImg from './assets/forest-waterfall.jpg';

const PLACES = [
  {
    id: 'african-savanna',
    image: savannaImg,
    title: 'African Savanna',
    description: 'Experience the beauty of nature.',
  },
  {
    id: 'amazon-river',
    image: amazonImg,
    title: 'Amazon River',
    description: 'Get to know the largest river in the world.',
  },
  {
    id: 'caribbean-beach',
    image: caribbeanImg,
    title: 'Caribbean Beach',
    description: 'Enjoy the sun and the beach.',
  },
  {
    id: 'desert-dunes',
    image: desertImg,
    title: 'Desert Dunes',
    description: 'Discover the desert life.',
  },
  {
    id: 'forest-waterfall',
    image: forestImg,
    title: 'Forest Waterfall',
    description: 'Listen to the sound of the water.',
  },
];

function App() {
  return <main>
    <section>
      <h2>Why work with us?</h2>
      <Accordion className="accordion">
        <Accordion.Item id="experience" className="accordion-item">
          <Accordion.title className="accordion-item-title">
            We got 20 years experience
          </Accordion.title>
          <Accordion.content className="accordion-item-content" >
            <article>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sed officia facilis sint hic earum ducimus. Aliquam, quidem ipsam beatae modi est aperiam minima debitis inventore totam, aut architecto iusto!</p>
            </article>
          </Accordion.content>
        </Accordion.Item>
      </Accordion>
      <Accordion className="accordion">
        <Accordion.Item id="guided" className="accordion-item">
          <Accordion.title className="accordion-item-title" >
            We're working with local guided
          </Accordion.title>
          <Accordion.content className="accordion-item-content">
            <article>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente sed officia facilis sint hic earum ducimus. Aliquam, quidem ipsam beatae modi est aperiam minima debitis inventore totam, aut architecto iusto!</p>
            </article>
          </Accordion.content>
        </Accordion.Item>
      </Accordion>
    </section>
    <section>
      <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
        {(item) => <Place item={item} />}
      </SearchableList>
      <SearchableList items={["item 1", "item 2"]} itemKeyFn={item => item}>
        {(item) => item}
      </SearchableList>
    </section>
  </main>;
}

export default App;
