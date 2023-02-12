
import React from "react";
import {Helmet} from "react-helmet";

function Meta({title, description, image, url, type}) {
    return (
        <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={url} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description}/>
                <meta property="og:image" content={image} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content={type} />
        </Helmet>
    );
  }

  export default Meta