##  __flat-l__ Description:
This module has tested support for chrome only, you are welcome to fork and test compatibilty for other browsers. The reason only Chrome is tested is because I wrote it for a chromium module.

The following can be achieved:
* Responsive flatline animation
* Multiple boxes can be targeted at unknown performance cost
* Custom colors
----

## Usage:

The following block is defined by:
~~~~
<div id="test1" style="width:100%;height:50px;display:block">

</div>
~~~~

With the following code you make it start, stop completely or flatline. _Note that container, beatColor and flatColor are required_
<br/>
~~~~
flatL.start({ container: document.getElementById("test1"), beatColor: "#F49AC0", flatColor: "#000000" });

flatL.stop();

flatL.flatLine(document.getElementById("test1"));
~~~~
