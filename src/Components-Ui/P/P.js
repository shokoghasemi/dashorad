import React from "react";
import './P.css'
import { Typography } from 'antd';


export default function P(props) {
    const { Text } = Typography;
    return (
        <div className="P">
            <Text {...props}>{props.discription}</Text>
            <br />

        </div>
    );
}