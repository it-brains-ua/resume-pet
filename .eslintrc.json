<!DOCTYPE html>
<html>
    <head>
        <div>
            {{#with car}}
              <div>
                <h1>{{name}}</h1>

                {{#with data}}
                <div>
                    <p>make:{{make}}</p>
                   <h1>model:{{model}}</h1>
                   <h2>year:{{year}}</h2>
                   <h3>color:{{color}}</h3>
                </div>
                {{/with}} 
                    <br>

                {{#each data}}
                   <div>
                     <span>material:{{material}}</span>
                     <samp>color:{{color}}</samp>
                     <b>heated:{{heated}}</b>
                     <p>ventilated:{{ventilated}}</p>
                   </div>
                {{/each}}
                    <br>

                 {{#each types}}
                 <div>
                    <h4>material:{{material}}</h4>
                    <h5>color:{{color}}</h5>
                    <h6>type:{{type}}</h6>
                    <var>size:{{size}}</var>
                    <abbr>resolution:{{resolution}}</abbr>
                    <ul>touchscreen:{{touchscreen}}</ul>
                 </div>
                 {{/each}}
                    <br>
              </div>
            {{/with}}
        </div>
    </head>
</html>
