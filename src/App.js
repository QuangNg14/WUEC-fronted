import { useState } from "react";
import "./App.css";
import StartupBox from "./components/StartupBox";

const data = [
  {
    name: "Wunderbucket",
    description: "Static hosting for designers and developers",
    image:
      "https://ph-files.imgix.net/f4c773a8-07fa-440c-8ae6-10dab22baf1d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fit=crop&bg=0fff&dpr=1",
    upvotes: 150,
    type: "Developer Tools",
    numComments: 16,
  },
  {
    name: "Gainy",
    description: "Stock picker and portfolio analysis app for retail investors",
    image:
      "https://ph-files.imgix.net/c225015c-5cd6-471f-a14c-2ba86fa459d3.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&frame=1&dpr=2&bg=0fff",
    upvotes: 847,
    type: "Fintech",
    numComments: 200,
  },
  {
    name: "Fundraising Kit",
    description: "All you need to raise a round",
    image:
      "https://ph-files.imgix.net/d20c1dc6-3dff-44a9-9f45-39275c57b2fd.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&bg=0fff&dpr=1",
    upvotes: 1059,
    type: "Investing",
    numComments: 176,
  },
  {
    name: "Winden",
    description: "Banking and financial services for internet entrepreneurs",
    image:
      "https://ph-files.imgix.net/a3b8241f-09d0-42a8-9d7a-6440fe2d8fc1.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fit=max&dpr=1",
    upvotes: 487,
    type: "Financial Service",
    numComments: 56,
  },
  {
    name: "First 100 Users",
    description: "100 ideas for your startup's first 100 users",
    image:
      "https://ph-files.imgix.net/6f3e8fc6-1585-41ac-b8d4-265507169046.gif?auto=compress&fm=webp&codec=mozjpeg&cs=strip&w=80&h=80&fit=max&frame=1&dpr=2&bg=0fff",
    upvotes: 1045,
    type: "Marketing",
    numComments: 181,
  },
  {
    name: "Reaktr",
    description: "Generate beautiful audio-reactive video easily",
    image:
      "https://ph-files.imgix.net/f4c773a8-07fa-440c-8ae6-10dab22baf1d.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=60&h=60&fit=crop&bg=0fff&dpr=1",
    upvotes: 82,
    type: "Design Tools",
    numComments: 15,
  },
];

function App() {
  const [dataList, setDataList] = useState(data);
  console.log(dataList);
  return (
    <div className="App">
      <div className="header">
        <div>The complete list of unicorn startups</div>
      </div>
      <div className="container">
        {dataList &&
          dataList.map((elem) => {
            return (
              <StartupBox
                name={elem.name}
                description={elem.description}
                image={elem.image}
                upvotes={elem.upvotes}
                type={elem.type}
                numComments={elem.numComments}
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
