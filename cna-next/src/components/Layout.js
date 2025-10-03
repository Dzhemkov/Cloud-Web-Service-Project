import React, {ReactNode} from "react";

type Props = {children: ReactNode;};

const Layout: React.FC<Props> = (props) => (
    <div>
        <div className="w-full text-center bg-red-800 flex-wrap items-center justify-between p-4">
            <div className="text-3xl w-1/2 text-white mx-2 md:mx-auto py-5">
                Inventory Data
            </div>
        </div>
        <div className="layout">{props.children}</div>
        <style jsx global>{`
        html {box-sizing: border-box;}
        *, *:before, *:after {box-sizing: inherit;}
        body{
            margin: 0;
            padding: 0;
            font-size: 16px;
            font-family: sans-serif;
            background-color: rgb(183, 201, 231);
        }
        input,
        textarea {font-size: 16px;}
        button {font-size: 16px; font-family: inherit; cursor: pointer;}
        `}
        </style>
        <style jsx>
            {`
                .layout {
                    padding: 0 2rem;
                }
            `}
        </style>
    </div>
);

export default Layout;