# <center> <section id="HTML-BASICS-*w/joe*"> HTML BASICS *(w/joe)* </center>

<center> <img src="JosephOchego.jpg" alt="Joseph Ochego" width="200" height="200"> </center>

### Intro To HTML
- <> Tags Make up HTML, they are enclosed in these angled brackets
- **Markup Element** - Tags that Contain something within them e.g

````html
<Body>........</Body>
````
***Keep in Mind that the element is made up of the opening tag, the content, and the closing tag.**

- There are also empty elements e.g ````<Br>````
- At the beginning of a html file, we need to put the declaration:
  ````html
  <!doctype html>
  ````
- ...followed by ````<html>```` element.
- The rest of the elements that make up the web page are written within this element.
- ````<head>```` contains important info about the page.
- Here is a snippet example of html code;
````html
<!doctype html>

<html>
    <head>
        <title>My Web Page</title>
    </head>

    <body>


    </body>

</html>
````
- ````<br>```` element is used to add line breaks.
- For extra space between words in a phrase, we use ````&nbsp;````

### Lists 
- There are two types of lists
  1. Ordered Lists ````<ol>````
  2. Unordered Lists ````<ul>````
- Here is an example;
````html
<ul>
  <li>First Item</li>
  <li>Second Item</li>
  <li>Third Item</li>
</ul>
````
- Both lists have an ````<li>```` element embedded in them.
### Tables
- ````<table>```` element is the main table element and everything is embedded inside it
- ````<tr>```` element identifies it as a table row
- ````<td>```` element contains table data 
- ````<th>```` element identifies it as a column

- **EXAMPLE:** SoftEngine Company offers several services and the timings for these services are displayed on my website in the form of this **table**;
````html
        <table>
            <tr>
                <th>Time</th>
                <th>Services Available</th>
                <th>Technician</th>
            </tr>
            <tr>
                <td>11:30 - 12:30</td>
                <td>Repairs</td>
                <td>J.Ochego</td>
            </tr>
            <tr>
                <td>14:00 - 15:00</td>
                <td>One-on-one</td>
                <td>D.Ogweno</td>
            </tr>
            <tr>
                <td>17:00 - 18:00</td>
                <td>Open-Store</td>
                <td>Al.Fonsi</td>
            </tr>
        </table>
````

### Nesting
- We can put other elements within other elements. e.g
  - to indicate that I really love my computer, I can enclose love in ````<strong>```` element.
````html
<p>I <strong>really love</strong> my computer</p>
````
- If ````<p>```` was opened first and ````<strong>```` nested in it, the nested element should be closed first then the main one to close everything.
## Void Elements
- Not all the elements follow the standard opening tag-closing tag syntax. Some of them have a stand-alone tag e.g ````<img>````.
- **Void elements** are usually used to embed/insert something into the document e.g ````<img>```` used to insert an image to a page;
````html
<img src="JosephOchego.jpg" alt="Joseph Ochego">
````
- Adding a closing ***/>*** is not required but is valid. It can also be used to make your HTML a valid XML.
## Attributes
- Elements also have attributes. They can be written in the following manner;
````html
<p class="editor's-note">I really love my computer.</p>
````
- Attributes contain extra information about the element that won't appear in the content.
- An attribute should have:
  - A space between it and the element name. (For an element with more than one attribute, the attributes should be separated by spaces too.)
  - The attribute name, followed by an equal sign.
  - An attribute value, wrapped with opening and closing quote marks.

Another important element is ````<a>```` which is an ***anchor*** element - it transforms text into a hyperlink. The anchor element takes a number of attributes including:
- **href**, whose value specifies the web address of the ink e.g ***"https://wwww.reddit.com"***
- **title**, provides additional info about the page being linked for example, ***"The Reddit Homepage"***
- **target**, specifies the browsing context used to display the link, for example ```` target="_blank"````,which opens the link in a new tab.

## Boolean Attributes
Are seen when you see an attribute without a value. It can only have one attribute which is usually same as the attribute name. For example the **disabled** attribute(used to disable form entry. Appears greyed out usually.)
````html
<input type="text" disabled="disabled"/>
````
- The "" around an attribute's value can be omitted no problem. An issue arises when there are spaces between the value's characters e.g ````title=My Reddit HomePage````. HTML will read the title as three  separate attributes.
- It is advisable to **always** include the attributes quotes to avoid confusion.
- Double or single quotes can be used, depending on the dev's style. However, using them together is going to break the code.  You can also use on type of quote to enclose the value and the other when you want to include it in the value, for example 
````html
<a href="https://www.google.com" title="Ochego's Title">My Title</a>
````

## The HTML MINIONS
1. ````<!DOCTYPE html>````
2. ````<html></html>```` wraps all the page's content. Also <em>the root</em> element.
3. ````<head></head>```` element acts as a container for everything you want to include on the HTML page, that isn't the content the page will show to viewers.
4. ````<meta charset="utf-8">````
5. ````<title></title>```` sets the title of the page.
6. ````<body></body>```` contains all the content that will be displayed on the page.

## Character Reference
- How do you write characters like opening and closing brackets without html interpreting them as code?
- For this, we use character references. Each character ref starts with ampersand(&) and ends with a semicolon(;);
   - < = ````&lt;````
   - ````>```` =````&gt;````
   - " = ````&quot;````
   - ' = ````&apos;````
   - & = ````&amp;````
- These char refs can be remembered because the text it uses can be seen as less than for '````&lt````' and apostrophe for '````&apos````'
## HTML Commenting
- Browsers ignore comments, making them invisible to the user.
- This allows you to include notes to help you and others understand your code.
- To write a comment, you wrap it inside &lt;!--  &nbsp; &nbsp; --&gt;. For example;
````html
<p>I am not a comment</p>
<!-- I am -->
```` 
🥳🥳<strong>Congratulations on completing [`HTML BASICS w/joe`](#HTML-BASICS-*w/joe*)
