# flat-l
Flat-L is a Chrome animation module that uses the canvas element. It allows you to imitate an EKG graph for whatever purpose you deem necessary. It has three functions: start, stop and flatline. 

    <h1>
        <strong>flat-l</strong> Description:
    </h1>

    <p>
        This module has tested support for chrome only, you are welcome to fork and test compatibilty for other browsers. The reason only Chrome is tested is because I wrote it for a chromium module.
        <br/>
        The following can be achieved:
        <ul>
            <li>
                Responsive flatline animation
            </li>
            <li>
                Multiple boxes can be targeted at unknown performance cost
            </li>
            <li>
                Custom colors
            </li>
        </ul>
    </p>

    <hr/>
    <h1>
        Usage:
    </h1>

    <p>
        The following block is defined by:<br/>
        <code>
            &lt;div id=&quot;test1&quot; style=&quot;width:100%;height:50px;display:block&quot;&gt;
            <br/>
            &lt;/div&gt;
        </code>
        <br/>
    </p>
    <p>
        With the following code you make it start, stop completely or flatline. <em>Note that container, beatColor and flatColor are required</em>
        <br/>
        <code>
            flatL.start({ container: document.getElementById("test1"), beatColor: "#F49AC0", flatColor: "#000000" });
            <br/>
            flatL.stop();
            <br/>
            flatL.flatLine(document.getElementById("test1"));
        </code>
        <br/>
      </p>
