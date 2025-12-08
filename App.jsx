import React, { useState } from "react";
import "./Portfolio.css";

const ARTIFACTS = [
  {
    id: "artifact1",
    navLabel: "Artifact 1",
    sectionTitle: "Artifact 1: Project 1 – Final Literacy Narrative",
    subtitle: "Between Two Tongues – Final Version",
    goals: [
      "Personal Goal 1: Write more fluently",
      "Personal Goal 2: Write a well-written paper",
      "Personal Goal 3: Use stronger language and literary devices",
    ],
    file: "/artifact1.pdf",
    mountainClass: "artifact-page-1",
    reflection: [
      "This final literacy narrative feels like the first main peak in my climb this semester. I worked on the flow of the story so each scene leads into the next. I revised the opening paragraph until it gave clear context and a steady pace. I also focused on details that show how Hindi and English shape my life, instead of only telling the reader what I think.",
      "This artifact connects to my three personal goals. The writing moves more smoothly than it did in the draft. The structure follows a clear beginning, middle, and end. The language uses images and specific moments, not vague statements. Seeing the difference between the draft and the final version reminds me that strong writing comes from steady work, not from one fast attempt.",
    ],
    quote:
      "This artifact is my first summit. It shows how patient revision turns a rough idea into a clear story.",
  },
  {
    id: "artifact2",
    navLabel: "Artifact 2",
    sectionTitle: "Artifact 2: Project 2 – Draft Infographic",
    subtitle: "Project 2 Draft – Gaming Laptop Reviews",
    goals: ["Goal 1: Rhetorical Awareness"],
    file: "/artifact2.pdf",
    mountainClass: "artifact-page-2",
    reflection: [
      "This draft sits near the bottom half of the mountain. It is not polished, but it marks an important step. While I built these early slides, I started to see how different genres of gaming laptop reviews speak to readers. I compared YouTube videos, long written reviews, and short blog posts. I noticed patterns in tone, layout, and design.",
      "This work fits Goal 1 because it pushed me to think about audience and purpose. I had to decide who I wanted to reach with the infographic and what kind of language they would expect. The draft still has extra text and some confusing parts, yet it shows the moment when I began to see genre as more than topic. It is the point where I picked my route before climbing higher.",
    ],
    quote:
      "This draft is the lower slope. It taught me to study how real reviewers shape their message for gamers.",
  },
  {
    id: "artifact3",
    navLabel: "Artifact 3",
    sectionTitle: "Artifact 3: Project 2 – Final Infographic",
    subtitle: "Gaming Laptop Reviews – Final Infographic",
    goals: ["Goal 2: Critical Thinking and Composing"],
    file: "/artifact3.pdf",
    mountainClass: "artifact-page-3",
    reflection: [
      "The final infographic feels like a higher ridge on the climb. To reach this point, I had to decide what information mattered most. I removed extra words, grouped related points, and chose headings that guide the reader. I also planned where to place images and data so the slides feel organized instead of busy.",
      "This artifact links to Goal 2 because it shows both critical thinking and careful composing. I read and compared several sources, then used that reading to build one clear argument about gaming laptop reviews. I treated design as part of the argument, not as decoration. Each slide moves the reader one step closer to the main claim. This project showed me that good visual work depends on the same skills as a good essay: selection, structure, and focus.",
    ],
    quote:
      "This infographic is the long ridge line. Every layout choice supports the main path of my argument.",
  },
  {
    id: "artifact4",
    navLabel: "Artifact 4",
    sectionTitle: "Artifact 4: Unit 2 Reflection",
    subtitle: "Reflection for Unit 2",
    goals: ["Goal 5: Reflection"],
    file: "/artifact4.pdf",
    mountainClass: "artifact-page-4",
    reflection: [
      "This reflection is like a lookout spot on the trail. I paused and turned around to see the progress I had made in Unit 2. In this piece I wrote about what went well, what I struggled with, and which habits helped me. I noted that starting earlier and building the infographic in stages gave me more control.",
      "This artifact matches Goal 5 because it focuses on looking back and learning. By writing this reflection, I could connect our class activities with the final product. I also saw patterns in my own work, such as waiting too long to test design ideas or underestimating how much time revision takes. These insights help me choose better paths in future projects.",
    ],
    quote:
      "This reflection is the overlook. It helps me read the path behind me so I can climb smarter next time.",
  },
  {
    id: "artifact5",
    navLabel: "Artifact 5",
    sectionTitle: "Artifact 5: Project 1 – Draft",
    subtitle: "Project 1 Draft – Early Version",
    goals: ["Goal 4: Revision"],
    file: "/artifact5.pdf",
    mountainClass: "artifact-page-5",
    reflection: [
      "This draft shows what the path looked like near the base of the mountain. My ideas about language and identity were present, but they were rough and out of order. Some scenes repeated points, and some important parts ended too quickly. Sharing this draft in class felt risky, but it opened the door to helpful feedback.",
      "I linked this artifact to Goal 4 because it proves how important revision is. I used comments from my instructor and my peers to decide what to cut, what to expand, and where to slow the pacing. The final version looks stronger because I was willing to rethink the draft instead of just fixing small errors. This piece reminds me that real growth happens in the middle of the climb, when I keep going even when the route feels steep.",
    ],
    quote:
      "This draft is the steep middle section. It is messy but full of chances to choose a better route.",
  },
];

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "introduction", label: "Introduction" },
  ...ARTIFACTS.map((a) => ({ id: a.id, label: a.navLabel })),
  { id: "conclusion", label: "Conclusion" },
];

function ArtifactSection({ artifact }) {
  return (
    <section
      id={artifact.id}
      className={`page artifact-page ${artifact.mountainClass}`}
      aria-label={artifact.sectionTitle}
    >
      <div className="content-card">
        <h3>{artifact.sectionTitle}</h3>
        <h4>{artifact.subtitle}</h4>

        <div className="goal-tags">
          {artifact.goals.map((g) => (
            <span key={g} className="goal-tag">
              {g}
            </span>
          ))}
        </div>

        <div className="artifact-viewer">
          <iframe
            src={artifact.file}
            className="artifact-frame"
            title={artifact.sectionTitle}
          />
        </div>

        <a
          href={artifact.file}
          className="artifact-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          📄 Open full artifact
        </a>

        <h4>Reflection</h4>
        <div className="section-text">
          {artifact.reflection.map((p, idx) => (
            <p key={idx} style={{ marginBottom: idx === artifact.reflection.length - 1 ? 0 : "1rem" }}>
              {p}
            </p>
          ))}
        </div>

        <div className="quote-box">{artifact.quote}</div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navClass = (id) =>
    `nav-link ${activeSection === id ? "active" : ""}`;

  return (
    <div className="portfolio-root">
      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <nav
        className={`sidebar ${menuOpen ? "open" : ""}`}
        aria-label="Portfolio navigation"
      >
        <h1>
          English 107
          <br />
          Portfolio
        </h1>
        <p className="subtitle">Fall 2025</p>
        <ul className="nav-menu">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={navClass(item.id)}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main-content">
        {/* HOME */}
        {activeSection === "home" && (
          <section id="home" className="page active" aria-label="Home">
            <div className="hero-section">
              <h2>Learning Portfolio</h2>
              <div className="profile-img-placeholder" aria-hidden="true">
                📚
              </div>
              <div className="hero-name">
                Your Name
              </div>
              <div className="hero-tagline">
                A student, writer, and learner.
              </div>
            </div>

            <div className="content-card">
              <h3>About Me</h3>
              <div className="section-text">
                <p>
                  I am a first-year student at the University of Arizona. I study
                  Computer Science and enjoy technology, games, and long walks to
                  clear my head. Before this course, I saw writing as something I
                  did only for school. I focused on grammar and worried about
                  mistakes more than ideas.
                </p>
                <p>
                  English 107 helped me see writing in a new way. I learned that
                  strong writing grows through planning, drafting, feedback, and
                  revision. I now think more about who will read my work and what
                  they need from me. I still have more to learn, but I feel more
                  prepared to use writing in other classes and in my future
                  career.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* INTRODUCTION */}
        {activeSection === "introduction" && (
          <section
            id="introduction"
            className="page active"
            aria-label="Introduction"
          >
            <div className="content-card">
              <h3>Introduction to My Portfolio</h3>

              <h4>My Learning Journey</h4>
              <div className="section-text">
                <p>
                  At the start of English 107, I wrote in one quick pass. I
                  drafted, fixed small errors, and turned the work in. Over this
                  semester, I learned to slow down. I now plan before I write and
                  I expect to revise more than once. Peer review, conferences,
                  and workshops showed me how other readers see my work. Their
                  comments helped me adjust my tone and structure.
                </p>
                <p>
                  Our major projects gave me practice with different genres.
                  Project 1, the literacy narrative, asked me to tell a story
                  about language and identity. Project 2, the genre analysis
                  infographic, asked me to study gaming laptop reviews and
                  present my findings in a visual way. Smaller reflections
                  between these projects helped me notice patterns in my writing
                  and set new goals for each unit.
                </p>
              </div>

              <h4>Course Goals and My Artifacts</h4>
              <div className="section-text">
                <p>
                  Homework 15 asked me to match course goals with specific pieces
                  of work. I used that plan to build this portfolio.
                </p>
                <p>
                  <strong>Personal Goals 1–3 (fluency, a well-written paper, stronger language):</strong>{" "}
                  I linked these goals to my <em>Project 1 Final</em>. This
                  narrative shows how my sentences flow more smoothly, how I
                  control the structure of the essay, and how I use details and
                  images to support my point.
                </p>
                <p>
                  <strong>Goal 1 – Rhetorical Awareness:</strong> I paired this
                  goal with my <em>Project 2 Draft</em>. In that draft I started
                  to see how different review genres use tone, layout, and design
                  to reach gamers.
                </p>
                <p>
                  <strong>Goal 2 – Critical Thinking and Composing:</strong> I
                  matched this goal with my <em>Project 2 Final Infographic</em>.
                  In the final version I chose better evidence, cut extra text,
                  and organized the slides around a clear claim.
                </p>
                <p>
                  <strong>Goal 4 – Revision:</strong> I used this goal with my{" "}
                  <em>Project 1 Draft</em>, which went through several rounds of
                  change before it became the final literacy narrative.
                </p>
                <p>
                  <strong>Goal 5 – Reflection:</strong> I paired this goal with
                  my <em>Unit 2 Reflection</em>. In that piece I looked back at
                  the infographic project and named what helped me grow.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ARTIFACTS */}
        {ARTIFACTS.map(
          (artifact) =>
            activeSection === artifact.id && (
              <ArtifactSection key={artifact.id} artifact={artifact} />
            )
        )}

        {/* CONCLUSION */}
        {activeSection === "conclusion" && (
          <section
            id="conclusion"
            className="page active"
            aria-label="Conclusion"
          >
            <div className="content-card">
              <h3>Conclusion</h3>
              <div className="section-text">
                <p>
                  These five artifacts trace one climb rather than one moment. I
                  began the semester near the bottom of the trail. I wrote fast,
                  focused on small errors, and did not think much about genre or
                  audience. Step by step, I learned to plan, draft, and revise in
                  a more deliberate way.
                </p>
                <p>
                  The literacy narrative and the infographic asked for different
                  skills, but the same habits helped in both projects. Careful
                  reading, clear structure, and time for revision made the work
                  stronger. I still want to improve my sentence flow, analysis,
                  and use of citation in other classes. My plan is to start major
                  projects earlier, visit office hours, and leave time for at
                  least one full round of revision before I submit.
                </p>
                <p>
                  To future students, I would offer one simple piece of advice:
                  treat each draft as one step on a trail, not as a final
                  judgment. If you keep moving, you reach higher ground.
                </p>
              </div>

              <div className="quote-box quote-final">
                “Writing is like climbing a mountain. You reach the summit one
                steady step at a time.”
              </div>
            </div>

            <footer className="portfolio-footer">
              <p>
                <strong>English 107 Course Portfolio</strong>
              </p>
              <p>Fall 2025 &nbsp;|&nbsp; Due: December 12, 2025</p>
              <p className="footer-school">University of Arizona</p>
            </footer>
          </section>
        )}
      </main>
    </div>
  );
}
