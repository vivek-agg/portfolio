import React from 'react';

const Screen3 = () => (
  <>
    <section className="screen3 screen">
      <div className="screen_content" id="about">
        <h2 className="screen_content--about">Who I am</h2>
        <p className="screen_content--title">
          Full stack developer based out of Banglore
        </p>

        <div className="screen_content--subtitle">
          <p>
            I'm a 26 years old JS developer &amp; MERN Stack Enthusiast from
            Ariyalur (TN) currently based in Banglore. I love everything that
            has to do with Coding &amp; Problem solving, Automization,
            Datastructures, Algorithm designing. I have more than 2.5 years of
            experience working as a Software developer.
          </p>
          <p>
            I love working with people, specially if they have the same passion.
          </p>
          <p>
            My hobbies include playing chess, solving{' '}
            <a
              href="https://www.hackerrank.com/VishnuThiyagu?badge=problem-solving&amp;stars=5&amp;level=3&amp;hr_r=1&amp;utm_campaign=social-buttons&amp;utm_medium=facebook&amp;utm_source=badge_share_profile&amp;social=linkedin"
              target="_blank"
            >
              Hackerrank
            </a>{' '}
            problems, soap carving and cycling.
          </p>
          <p>
            Why don't we work together? Go futher down to see why I am the man
            you need to hire!
          </p>
        </div>

        <img
          src={require('./../../assests/images/about1.jpg').default}
          alt="Vishnu's Image"
          className="screen_content--img"
        />
      </div>
    </section>
    <div className="screen4">anzzjknjkxn</div>
  </>
);

export default Screen3;
