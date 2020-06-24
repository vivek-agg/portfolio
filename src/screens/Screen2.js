import React from 'react';

const Screen1 = () => (
  <>
    <div className="screen2 screen">
      <div className="screen_content">
        <p className="screen_content-title"> What I do</p>
        <div className="screen_content-services">
          <div className="screen_content-serviceType1">
            <p className="screen_content-serviceTypeTitle">Frontend</p>
            <p>
              I work in JavaScript, React, React Hooks, Svelte, HTML5, CSS
              (flexbox & Grid), Material UI, Bootstrap including responsive
              layouts and maximum performance outputs which makes a first
              impression to clients.
            </p>
          </div>
          <div className="screen_content-serviceType2">
            <p className="screen_content-serviceTypeTitle">Back-End</p>
            <p>
              I work in JavaScript, Python, NodeJS, Express, REST API,
              Socket.io, Redis, JWT, handling request and response in the server
              with CORS security in Linux machines using ORM and ODM for
              querying in database.
            </p>
          </div>
          <div className="screen_content-serviceType3">
            <p className="screen_content-serviceTypeTitle">DataBase</p>
            <p>
              I work in Relational DBMS, NoSQL, MSSQL Server, Postgres, MongoDB
              including Schema Design, Normalization, writting complex querys,
              functions, scripts, stored procedures and triggers to support
              application development.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="screen4">anzzjknjkxn</div> */}
  </>
);

export default Screen1;
