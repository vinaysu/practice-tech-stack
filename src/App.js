
import './App.css';

function App() {
  return (
    <div >
      <div>
        <h1 id='bookmark' >Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 2</h3>
        <h4>Heading 2</h4>
        <h5>Heading 2</h5>
        <h6>Heading 2</h6>
      </div>

      <div>
        <p>This is the paragraph tag, this is block level element it will take the entire width</p>
        <p>br tag is used within this paragraph element, <br /> it is used to break the content, it wil start in the next line, it is the self closing tag</p>
        <p>HTML will ignore the white spaces, by default ths paragraph tag and the heading tag have the margin and padding  </p>
      </div>

      <div>
        <a target='_blank' href='https://www.w3schools.com/html/html_basic.asp'>target blank</a> <br></br>
        <a href='https://www.w3schools.com/html/html_basic.asp'>default</a>
        <p>Anchor tags are the inline level elements, they can be arranged side by side automatically and they can refresh the entire page </p>
      </div>

      <div>
        <img width='100' title='text will be displayed at the tip of cursor' style={{ borderRadius: '50%', cursor: 'pointer' }} height="100" src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' />
        <img width='100' alt='if there is any error in the url or path text will be displayed' style={{ borderRadius: '50%' }} height="100" src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' />
        image elements are the inline level elements
        <hr />
        <hr></hr>
      </div>

      <pre>
        This is preformatted text.
        It will display exactly as written here,
        including spaces and line breaks.
      </pre>

      <div>
        <h1>Text formatting elements</h1>
        <b>bold</b><br />
        <strong>strong</strong><br />
        <i>italic</i><br />
        <em>emphasized text</em><br />
        <u>underline</u><br />
        <strike>strike</strike><br />
        <mark>mark</mark><br />
        <small>small</small><br />
        <del>deleted</del><br />
        <ins>inserted</ins><br />
        <caption>H<sub>2</sub>o</caption>
        <caption>H<sup>2</sup>o</caption>
        <caption>hello world</caption>
        <p>caption is only for the single word, it is the block level emlement </p>
      </div>

      <blockquote>
        this is the blockquote like the paragraphs we are writing
        there will be margin at the first of textywegf ygwyefgjhwg fwfy wef
        wefvgweyftwtheftw wefygwyef wefywegfhwyefty wefwefgweu wefiwehfiuywef
        wefwueyfghwefjy we weufhiwe wiefnweoifu wefiuwfnwiufhw wefwefuwefhwieuf ybh jwhef
        wygftygyg ygwyfeguywgfuwgfu weufhuwef viny  efywef wuefy wefuywef wefywef wefiuwfnwiufhwwefwef buy
        hgwevf uwyef  wyef ywef  weufy wefuywef wefywef wefuywef wefywef wefiuwfnwiufhwwefywefbyy
        wefywef weufywef wefywef wefywef
      </blockquote>


      <div>
        <a href="mailto:suddakuntivinay7877@gmail.com" >send mail</a> <br />
        <button onClick={() => window.alert('hellow')} >click here to get alert</button>
        <p> <a href='#bookmark' >bookmark to heading1</a></p>
        <p>We can also create a bookmark to another page like routing</p>
      </div>

      <div>
        <p>We can add the image as a link to another page</p>
        <a href='https://www.w3schools.com/html/html_images.asp' >
          <img width='100' src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' />
        </a>
      </div>

      <div>

        <hr />
        <p>
          <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Smiley face" style={{ float: "left", width: 42, height: 42 }} />
          A paragraph with a floating image. A paragraph with a floating image. A paragraph with a floating image.
        </p>


        <p><strong>Float the image to the left:</strong></p>
        <hr />
        <p>
          <img src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600' alt="Smiley face" style={{ float: "right", width: 42, height: 42 }} />
          A paragraph with a floating image. A paragraph with a floating image. A paragraph with a floating image.
        </p>
        <hr />
      </div>

      <div>
        <p>Map tag defines the image with the clickable areas inside the image</p>

        <img width='600' height='600' src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'
          usemap='#workmap'
        />

        <map name='workmap' >
          <area shape='rect' coords='0, 0, 500, 500' href='https://www.w3schools.com/html/html_images.asp' />
          <area shape="circle" coords="337, 300, 44" href="https://www.w3schools.com/html/html_images.asp"></area>
        </map>

      </div>













    </div>
  );
}

export default App;
