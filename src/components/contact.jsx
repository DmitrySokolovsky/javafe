import React from 'react';

const arr = [
    {
        name: 'John',
        number: 1231312
    },
    {
        name: 'John1',
        number: 123131232323232
    },
    {
        name: 'John2',
        number: 123131232323
    }
];

export class Contact extends React.Component {
    render() {
        return (
            <div>
                {
                    arr.map((item, index) => {
                        return (
                            <div key={item.name + index}>
                                <p>{item.name}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}