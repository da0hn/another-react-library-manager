import React from "react";

type Props = {
    title: string
}

export default function Header({title}: Props) {
    return (
        <h1>{title}</h1>
    );
}


