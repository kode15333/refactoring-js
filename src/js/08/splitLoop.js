{
    const foo = (people) => {
        let youngest = people[0] ? people[0].age : Infinity;
        let totalSalary = 0;
        for (const p of people) {
            if (p.age < youngest) youngest = p.age;
            totalSalary += p.salary;
        }

        return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
    };
}

const foo = (people) => {
    let youngest = people[0] ? people[0].age : Infinity;
    let totalSalary = 0;
    for (const p of people) {
        totalSalary += p.salary;
    }

    for (const p of people) {
        if (p.age < youngest) youngest = p.age;
    }

    return `최연소: ${youngest}, 총 급여: ${totalSalary}`;
};

const totalSalary = () => {
    return people.reduce((total, p) => total + p.salary, 0);
};

const youngestAge = () => {
    return Math.min(...people.map(p => p.age));
}
