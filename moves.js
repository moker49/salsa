const moveGroups = [
    {
        name: "Simple",
        moves: [
            { name: "Angle Back", semi: false, date: '2025-11-08T12:00:00' },
            { name: "Angle Suzy", semi: false, date: '2025-11-08T12:00:00' },
            { name: "Basic", semi: false, date: '2025-10-01T12:00:00' },
            { name: "Braid", semi: false, date: '2025-11-08T12:00:00' },
            { name: "Cord Beat Crossover", semi: false, date: '2025-10-29T12:00:00' },
            { name: "Double Hunts Point", semi: false, date: '2025-11-25T12:00:00' },
            { name: "Forward Crossover", semi: false, date: '2025-11-15T12:00:00' },
            { name: "Four Corners", semi: false, date: '2025-10-22T12:00:00' },
            { name: "Front Double Basic", semi: false, date: '2025-10-01T12:00:00' },
            { name: "Hunts Point", semi: false, date: '2025-11-25T12:00:00' },
            { name: "Hook Step", semi: true, date: '2025-10-04T12:00:00' },
            { name: "Hot Toe", semi: true, date: '2025-10-04T12:00:00' },
            { name: "Left Flare", semi: false, date: '2025-11-29T12:00:00' },
            { name: "Reverse Crossover", semi: false, date: '2025-11-18T12:00:00' },
            { name: "Semi Circle", semi: false, date: '2025-10-15T12:00:00' },
            { name: "Side Basic", semi: true, date: '2025-10-01T12:00:00' },
            { name: "Side Basic Plus", semi: false, date: '2025-10-22T12:00:00' },
            { name: "Side Slide", semi: true, date: '2025-11-19T12:00:00' },
            { name: "Side Slide Plus", semi: true, date: '2025-11-22T12:00:00' },
            { name: "Side Triplet", semi: true, date: '2025-11-05T12:00:00' },
            { name: "Suzy Q", semi: true, date: '2025-10-04T12:00:00' },
            { name: "Switch Timing", semi: false, date: '2025-10-18T12:00:00' },
            { name: "Syncopated Front Double Cross", semi: true, date: '2025-12-03T12:00:00' },
        ]
    },
    {
        name: "Simple Combos",
        moves: [
            { name: "Angle Braid", semi: true, date: '2025-11-08T12:00:00' },
            { name: "Double Left Flare", semi: false, date: '2025-11-29T12:00:00' },
            { name: "Double Tap Crossover Slide", semi: true, date: '2025-11-19T12:00:00' },
            { name: "Double Tap Crossover Slide Plus", semi: true, date: '2025-11-22T12:00:00' },
            { name: "Forward Crossover Suzy Q", semi: false, date: '2025-11-15T12:00:00' },
            { name: "Hot Toe Suzy", semi: true, date: '2025-10-08T12:00:00' },
            { name: "Hot Toe Combo", semi: false, date: '2025-11-29T12:00:00' },
            { name: "Reverse Crossover Suzy Q", semi: false, date: '2025-11-18T12:00:00' },
            { name: "Single Tap Crossover Slide", semi: true, date: '2025-11-19T12:00:00' },
            { name: "Single Tap Crossover Slide Plus", semi: true, date: '2025-11-22T12:00:00' },
            { name: "Suzy Cross Suzy", semi: true, date: '2025-10-11T12:00:00' },
            { name: "Suzy Cross Suzy With A Turn", semi: true, date: '2025-10-25T12:00:00' },
            { name: "Suzy Q Hook Combo", semi: true, date: '2025-10-08T12:00:00' },
        ]
    },
    {
        name: "Advanced",
        moves: [
            { name: "Angle Slave", semi: true, date: '2025-11-15T12:00:00' },
            { name: "Downtown", semi: true, date: '2025-10-11T12:00:00' },
            { name: "Downtown with a Turn", semi: true, date: '2025-10-25T12:00:00' },
            { name: "Four Tap V", semi: true, date: '2025-10-29T12:00:00' },
            { name: "Hook Flick", semi: true, date: '2025-11-04T12:00:00' },
            { name: "Inverted Suzy Plus", semi: false, date: '2025-10-25T12:00:00' },
            { name: "Left Front Double Cross", semi: false, date: '2025-11-01T12:00:00' },
            { name: "Right Front Double Cross", semi: false, date: '2025-11-01T12:00:00' },
            { name: "Suzy Q Plus", semi: true, date: '2025-10-11T12:00:00' },
            { name: "Symmetrical Angle Suzy", semi: false, date: '2025-11-15T12:00:00' },
            { name: "Symmetrical Angle Back", semi: false, date: '2025-11-15T12:00:00' },
            { name: "Syncopated Angle Back", semi: false, date: '2025-12-06T12:00:00' },
        ]
    },
    {
        name: "Advanced Combos",
        moves: [
            { name: "Cord Beat Suzy", semi: false, date: '2025-10-29T12:00:00' },
            { name: "Double Four Tap V", semi: true, date: '2025-10-29T12:00:00' },
            { name: "Double Hot Toe Combo", semi: false, date: '2025-12-02T12:00:00' },
            { name: "Double Hot Toe Combo With Reverse", semi: false, date: '2025-12-02T12:00:00' },
            { name: "Double Suzy Plus", semi: true, date: '2025-10-22T12:00:00' },
            { name: "Forward Crossover Left Front Double Cross Suzy Q", semi: false, date: '2025-11-15T12:00:00' },
            { name: "Left into Right Front Double Cross", semi: true, date: '2025-11-01T12:00:00' },
            { name: "Quadruple Suzy Plus", semi: false, date: '2025-10-25T12:00:00' },
            { name: "Reverse Crossover Left Front Double Cross Suzy Q", semi: false, date: '2025-11-18T12:00:00' },
            { name: "Suzy Q Hook Combo Plus", semi: true, date: '2025-10-22T12:00:00' },
            { name: "Syncopated Front Double Cross Turn Combo", semi: false, date: '2025-12-03T12:00:00' },
            { name: "Triple Four Tap V", semi: false, date: '2025-11-01T12:00:00' },
            { name: "Triple Suzy Plus", semi: false, date: '2025-10-22T12:00:00' },
            { name: "Turn Combo", semi: true, date: '2025-10-15T12:00:00' },
            { name: "Ultra Combo", semi: false, date: '2025-10-29T12:00:00' },
        ]
    },
    {
        name: "Women's",
        moves: [
            { name: "Broken Left Turn", semi: false, date: '2025-11-11T12:00:00' },
            { name: "Copa", semi: false, date: null },
            { name: "Cross Body Lead (F)", semi: false, date: '2025-10-18T12:00:00' },
            { name: "Inside Left", semi: false, date: '2025-10-25T12:00:00' },
            { name: "Right Turn", semi: false, date: '2025-10-14T12:00:00' }
        ]
    },
    {
        name: "Men's",
        moves: [
            { name: "About Face Right Turn", semi: false, date: '2025-11-05T12:00:00' },
            { name: "Axle Right / Axle Left", semi: false, date: '2025-10-22T12:00:00' },
            { name: "Back Charge", semi: false, date: '2025-11-11T12:00:00' },
            { name: "Cross Body Lead (M)", semi: false, date: '2025-10-18T12:00:00' },
            { name: "Full Axle Right Turn", semi: false, date: '2025-10-22T12:00:00' },
            { name: "Half Right Half Left", semi: false, date: '2025-10-15T12:00:00' },
            { name: "Half Left Back Charge", semi: false, date: '2025-11-18T12:00:00' },
            { name: "Half Right Back Charge", semi: false, date: '2025-11-18T12:00:00' },
            { name: "Left Spot Right Turn (Axel Left)", semi: false, date: null },
            { name: "Side Charge", semi: false, date: '2025-11-12T12:00:00' },
            { name: "Walk Around Left Turn", semi: false, date: '2025-10-29T12:00:00' },
            { name: "3 O'Clock Right Turn", semi: false, date: '2025-10-29T12:00:00' }
        ]
    },
    {
        name: "Partner Work",
        moves: [
            { name: "Broken Left (1)", semi: false, date: '2025-11-25T12:00:00' },
            { name: "Broken Left (1A)", semi: false, date: '2025-11-25T12:00:00' },
            { name: "Broken Left (2)", semi: false, date: '2025-11-29T12:00:00' },
            { name: "Broken Left (3)", semi: false, date: '2025-11-29T12:00:00' },
            { name: "Broken Left (4)", semi: false, date: '2025-12-06T12:00:00' },
            { name: "CBL (back charge)", semi: false, date: '2025-11-19T12:00:00' },
            { name: "CBL (double pump)", semi: false, date: '2025-11-08T12:00:00' },
            { name: "CBL (figure 8)", semi: false, date: '2025-11-05T12:00:00' },
            { name: "CBL (half right back charge)", semi: false, date: '2025-11-22T12:00:00' },
            { name: "CBL (inside left)", semi: false, date: '2025-10-25T12:00:00' },
            { name: "CBL (two hands)", semi: false, date: '2025-11-15T12:00:00' },
        ]
    },
    {
        name: "Uncategorized",
        moves: [
            { name: "Cha Cha Cha Basic", semi: false, date: null },
            { name: "Cutaway", semi: false, date: null },
            { name: "Double Tap Suzy Q Cross Slide", semi: false, date: null },
            { name: "Lateral Cutaway", semi: false, date: null },
            { name: "Outside Cutaway", semi: false, date: null },
            { name: "Slave", semi: false, date: null },
        ]
    },
];
