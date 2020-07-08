import React, {useEffect, useState} from 'react';

function createMarkup(html) { return {__html: "<div>"+html+"</div>"}; };

<div dangerouslySetInnerHTML={createMarkup()} />

export default function InnerHTML(html) {
    return(
       <div dangerouslySetInnerHTML={createMarkup(html.html)} />
    ); 
}
