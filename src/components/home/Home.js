import { useContext, useState, useEffect } from "react";
import "./Home.css";
import StartupBox from "../StartupBox";
import NewStartupBox from "../NewStartupBox";
import Header from "../header/Header";
import { Context as NameContext } from "../../contexts/searchContext";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "DetoXyFi",
    description: "Detoxify is a for-profit social enterprise focused on helping people across the world get access to clean drinking water. At Detoxify, we’re building water filtration devices which individuals and households can use to rid the water they drink of both chemical and microbial impurities.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/df48777/2147483647/strip/true/crop/805x499+0+203/resize/1536x952!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2Ff0%2F8f%2F8eeef60f47798891319205d8cf6c%2Fdetoxyfi.png",
    upvotes: 300,
    type: "Wharton Club",
    numComments: 50,
  },
  {
    name: "Miren",
    description: "Miren empowers lenders to identify the best small business borrowers with its native-language first loan origination software and data services solutions.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/46d5349/2147483647/strip/true/crop/1200x900+0+150/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2F1f%2Fe5%2F6dfad5e5462a9fc0dcd316ffac9a%2Fpv-logo-xnqzjg2-tyzjzy5-khmc8dz-qclalar-cw7sstr.png",
    upvotes: 150,
    type: "Developer Tools",
    numComments: 16,
  },
  {
    name: "Impact Local",
    description: "Impact Local’s mobile platform connects users with local donating and volunteering opportunities in a few clicks. The platform brings modern search, curation, scheduling and social technologies to the philanthropy space for the first time.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/bb77814/2147483647/strip/true/crop/500x310+0+95/resize/1536x952!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2Fbd%2F8c%2Fe9813d314d8fa125f23d62d65085%2Fimpactlocal.png",
    upvotes: 847,
    type: "Fintech",
    numComments: 200,
  },
  {
    name: "Ossum Technologies",
    description: "Ossum Technologies is an orthopedic device company harnessing steerable needle technology to pass wires around bones, providing the precision required to navigate around surgical complications.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/847f448/2147483647/strip/true/crop/500x375+0+0/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2Fe1%2Fa5%2F6e983a7d4eff8bd1614cc1fb8214%2Fossum.png",
    upvotes: 1059,
    type: "Investing",
    numComments: 176,
  },
  {
    name: "Shinkei Systems Corp.",
    description: "Shinkei Systems builds robotics minimize fish waste and multiply shelf-life. From 1.2B lbs caught every day, as little as 1 in 3 fish make it to a plate; we can save the fishing industry more than $50B annually.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/36c160a/2147483647/strip/true/crop/1600x1200+0+0/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2F42%2Fc0%2Ff9c70f15431e88ca01e9598ba443%2Fshinkei.png",
    upvotes: 1059,
    type: "Marketing",
    numComments: 181,
  },
  {
    name: "ToxiSense",
    description: "ToxiSense genetically engineered the Arabidopsis plant to luminesce based on the endotoxin concentration applied to it, serving as a sustainable, cost-effective solution.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/41824a2/2147483647/strip/true/crop/372x279+0+51/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2Fe6%2F00%2Fd56969d24bdf8cd8e42fc472f2cb%2Ftoxisense-logo.PNG",
    upvotes: 487,
    type: "Financial Service",
    numComments: 56,
  },
 
  {
    name: "Groov",
    description: "Groov brings the luxury of custom insoles, the gold standard in foot support, to the mass market — affordably, conveniently, and fashionably.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/2874a29/2147483647/strip/true/crop/500x375+0+31/resize/1136x852!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2F99%2F29%2F860f9a9c409f8473f13d62078365%2Fgroov.png",
    upvotes: 82,
    type: "Design Tools",
    numComments: 15,
  },
  {
    name: "Nemu",
    description: "Nemu is developing an application to help estate representatives manage personal property transfers efficiently, fairly, and transparently, while preserving emotional and financial capital.",
    image:
      "https://upenn.brightspotcdn.com/dims4/default/1a4901b/2147483647/strip/true/crop/500x375+0+63/resize/1600x1200!/format/webp/quality/90/?url=http%3A%2F%2Fwharton-brightspot.s3.amazonaws.com%2Fdf%2F16%2F242c648f45c8a783fce91b02f576%2Fnemu.png",
    upvotes: 82,
    type: "Design Tools",
    numComments: 15,
  },
];

function Home() {
  const [dataList, setDataList] = useState(data);

  // useEffect(() => {
  //   fetch(
  //     "http://ec2-34-227-149-210.compute-1.amazonaws.com:8080/company")
  //           .then((res) => res.json())
  //           .then((json) => {
  //             setDataList(json)
  //         }
  //   )
  // }, []);

  const {
    state: { name },
  } = useContext(NameContext);
  const navigate = useNavigate();
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
                    <NewStartupBox
                      name={elem.name}
                      description={elem.description}
                      image={elem.image}
                      // upvotes={elem.upvotes}
                      // type={elem.type}
                      // numComments={elem.numComments}
                    />
                  );
                })}
          </div>
          {/* <div className="right">
            <div className="mb-30 col-md-6 col-lg-4">
              <div className="card">
                <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-1.png" />
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
                <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-2.png" />
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
                <img className="card-icon" src="https://quatamiha.files.wordpress.com/2021/07/nerdinvestor-3.png" />
                <h3 className="card-title">
                  Blog post #3: The Fed's movements this quarter
                </h3>
                <p className="card-text">
                  Bla bla bla this is dummy data for blog post (aligned right on
                  home page). <b>Read more</b>
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="header">
          <div className="banner">
            <h1>Explore startup ideas from fellow Quakers</h1>
            <button
              onClick={() => {
                navigate("/form");
              }}
            >
              Post your project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
