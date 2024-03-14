import "./DetectProduct.css";
const DetectProduct = () => {
  const historyData = [
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
    {
      address: "0x681c18547fo6541y786ac55ki892hgk78",
      timestamp: "Sunday, April 17, 2022, 3:36:33 PM",
    },
  ];
  
  let inc = 5;
  const itemCount = historyData ? historyData.length : 0;
  let extraHeight = itemCount > 0 ? itemCount * 75 : 0;

  if (itemCount > 5) {
    for (let i = 0; i < itemCount - 5; i++) {
      extraHeight += inc;
    }
  }

  const containerHeight = 50 + extraHeight;
  const mainExtraHeight = itemCount > 0 ? (itemCount - 2) * 70 : 0;
  const mainContainerHeight = 600 + mainExtraHeight;

  return (
    <div>
      <div className="main" style={{ height: mainContainerHeight + "px" }}>
        <div className="top">
          <div className="title">
            <h2 style={{marginBottom:"8px"}}>Check the product</h2>
          </div>
          <div className="Search">
            <input className="check_product" type="text" placeholder="Search" autoFocus style={{border:"transparent",paddingLeft:"7px"}} />
          </div>
        </div>
        <div className="mid">
          <div className="detail">
            <ul className="list">
              {/* Your list items */}
            </ul>
          </div>
        </div>
        <div className="end">
          <div className="endtitle">
            <h2>Product Ownership History</h2>
          </div>
          <div className="outer" style={{ height: containerHeight + "px" }}>
            {historyData?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="history"
                  style={{
                    float: (index + 1) % 2 === 0 ? "left" : "right",
                    position: "relative",
                    top: (index + 1) % 2 === 0 ? 1 : 4,
                    left: (index + 1) % 2 === 0 ? 90 : -70,
                  }}
                >
                  <li>{data?.address}</li>
                  <li>{data?.timestamp}</li>
                </div>
              );
            })}
            <div className="inner">
              {historyData?.map((data, index) => (
                <li key={index} className="centerli" style={{ marginBottom: "25px", fontSize: '8px' }}>
                  <h1>{index + 1}</h1>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectProduct;