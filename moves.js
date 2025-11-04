// Each move now includes:
// - name
// - date (ISO string)
// - defaultEnabled (boolean)

const moveGroups = [
    {
        name: "Beginner",
        moves: [
            { name: "Basic Step", date: "2024-01-02", defaultEnabled: true },
            { name: "Right Turn", date: "2024-02-12", defaultEnabled: true },
            { name: "Left Turn", date: "2024-02-18", defaultEnabled: true },
            { name: "Cross Body Lead", date: "2024-03-01", defaultEnabled: true }
        ]
    },
    {
        name: "Intermediate",
        moves: [
            { name: "Inside Turn", date: "2024-04-20", defaultEnabled: true },
            { name: "Outside Turn", date: "2024-04-22", defaultEnabled: true },
            { name: "Copa", date: "2024-05-10", defaultEnabled: false },
            { name: "Open Break", date: "2024-05-18", defaultEnabled: false },
            { name: "Hammerlock", date: "2024-06-03", defaultEnabled: false }
        ]
    },
    {
        name: "Advanced",
        moves: [
            { name: "360 Spin", date: "2024-07-12", defaultEnabled: false },
            { name: "Sweetheart", date: "2024-08-15", defaultEnabled: false },
            { name: "Shadow Position", date: "2024-09-01", defaultEnabled: false },
            { name: "Shine Step", date: "2024-09-20", defaultEnabled: false }
        ]
    }
];
