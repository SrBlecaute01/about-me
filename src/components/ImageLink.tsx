import React, {FC} from "react";

interface ImageLinkProps {

    url ?: string
    src: string
    description: string
    target ?: string | undefined

}

const ImageLink: FC<ImageLinkProps> = (props) => {
    var target = typeof props.target != "undefined" && props.target != null ? props.target : '_blank'
    return (
        <a href={props.url} target={target} rel='noreferrer'>
            <img
                className="h-8 w-8 mx-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100"
                src={props.src}
                alt={props.description}
            />
        </a>
    );
};

export default ImageLink