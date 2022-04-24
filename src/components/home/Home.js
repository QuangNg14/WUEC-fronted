import { useContext, useState, useEffect} from "react";
import "./Home.css";
import StartupBox from "../StartupBox";
import Header from "../header/Header"
import { Context as NameContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Wharton Undergraduate Entrepreneurship Club (WUEC)",
    description: "A tight network of students interested in entrepreneurship",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQHMrRu0HMrB6g/company-logo_200_200/0/1640988977783?e=2159024400&v=beta&t=tUlqVb99wxhFqYFt6v7U7-_WvpwJgsXzEsQyHKKIdc8",
    upvotes: 300,
    type: "Wharton Club",
    numComments: 50,
  },
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

function Home() {
  const [dataList, setDataList] = useState(data);
  

  useEffect(() => {
    fetch(
      "http://ec2-34-227-149-210.compute-1.amazonaws.com:8080/company")
            .then((res) => res.json())
            .then((json) => {
              setDataList(json)
          }
    )
  }, []);


  const {
    state: { name },
  } = useContext(NameContext);
  const navigate = useNavigate()
  return (
    <div className="App">
  
      <div>
        <div className="dashboard-container">
          <div className="container">
            {dataList &&
              dataList
                .filter((elem) =>
                  elem.name
                    .replace(/\s+/g, "")
                    .toLowerCase()
                    .includes(name.toLowerCase().replace(/\s+/g, ""))
                )
                .map((elem) => {
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
          <div className="right">
            <div className="mb-30 col-md-6 col-lg-4">
              <div className="card">
                {/* <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-1.png" /> */}
                <h3 className="card-title">
                  Blog post #1: New trends in the FinTech space 2022
                </h3>
                <p className="card-text">
                  These are 10 new startups in FinTech you should follow right
                  now. <b>Read more</b>
                </p>
              </div>
            </div>
            <div className="mb-30 col-md-6 col-lg-4">
              <div className="card">
                {/* <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-2.png" /> */}
                <h3 className="card-title">
                  Blog post #2: Podcasts on entrepreneurship we recommend
                </h3>
                <p className="card-text">
                  Bla bla bla this is dummy data for blog post (aligned right on
                  home page). <b>Read more</b>
                </p>
              </div>
            </div>
            <div className="mb-30 col-md-6 col-lg-4">
              <div className="card">
                {/* <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-3.png" /> */}
                <h3 className="card-title">
                  Blog post #3: The Fed's movements this quarter
                </h3>
                <p className="card-text">
                  Bla bla bla this is dummy data for blog post (aligned right on
                  home page). <b>Read more</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header">
        <div className="banner">
          <h1>Explore startup ideas from fellow Quakers</h1>
          <button onClick={()=>{navigate("/form")}}>Post your project</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;
