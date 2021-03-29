import Slide from "../Slide/Slide";

const code = `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
`;

const Task0 = ({ onSubmit, enabled }) => {
  return (
    <Slide enabled={enabled} code={code}>
      <h1>Heading 1</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <h2>Heading 2</h2>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book.
      </p>
      <h3>Heading 3</h3>
      <p>
        It has survived not only five centuries, but also the leap into{" "}
        <span id="hint">electronic typesetting</span>, remaining essentially
        unchanged.
      </p>
      <h4 aria-labelledby="hint">Heading 4</h4>
      <p>
        It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <input
        placeholder="What's the magic word?"
        onChange={(e) => {
          if (e.target.value === "electronic typesetting") onSubmit();
        }}
      />
    </Slide>
  );
};

export default Task0;
