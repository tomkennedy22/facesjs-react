import head1 from '../svgs/head/head1.svg';
import { bodyFileNameComponentMap } from './components/body';

export const Face = () => {

    return (
        <div className="face">
            <svg>
                <circle cx="100" cy="100" r="100" fill="yellow" />
                <circle cx="70" cy="70" r="20" fill="black" />
                <circle cx="130" cy="70" r="20" fill="black" />
                <path d="M 70 130 Q 100 150 130 130" stroke="black" fill="transparent" />
                <img src={head1} alt="My Icon" />;
            </svg>
        </div>
    )
}


export const Body = (props) => {

    let ChosenComponent = bodyFileNameComponentMap[props.bodyFileName];
    return <ChosenComponent />;
}