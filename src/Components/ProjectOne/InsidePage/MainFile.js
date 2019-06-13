import React from 'react';

const MainFile = () => <PersonList />;

const PersonList = () => {

    const people = [
        {
            img: 22,
            name: "john",
            job: "Developer"
        },
        {
            img: 34,
            name: "john",
            job: "Designer"
        },
        {
            img: 56,
            name: "peter",
            job: "artist"
        },
    ];

    return (
        <section>
            <Person Person={people[0]} />;
            <Person Person={people[1]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Person>;
            <Person Person={people[2]} />;
        </section>
    );
}

const Person = props => {
    const { img, name, job} = props.Person;
    const { children } = props;
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;

    return (
        <div className="person">
            <img src={url} alt="" />
            <div>
                <h4>{name}</h4>
                <h4>{job}</h4>
            </div>
            { children }
        </div>
    )
};

export default MainFile;
