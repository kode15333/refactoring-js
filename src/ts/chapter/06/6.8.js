const station = {
    name: "ZB1",
    readings: [
        { temp: 47, time: "2016-11-10 09:10" },
        { temp: 53, time: "2016-11-10 09:20" },
        { temp: 58, time: "2016-11-10 09:30" },
        { temp: 53, time: "2016-11-10 09:40" },
        { temp: 51, time: "2016-11-10 09:50" },
    ],
};

function readingOutsideRange(station, min, max) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

alerts = readingOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
);

class NumberRange {
    constructor(min, max) {
        this._data = {
            min,
            max,
        };
    }

    get min() {
        return this._data.min;
    }

    get max() {
        return this._data.max;
    }
}

function readingOutsideRange(station, min, max, range) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

alerts = readingOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling,
    null
);

const range = new NumberRange(
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling
);

alerts = readingOutsideRange(station, range);

function readingOutsideRange(station, range) {
    return station.readings.filter(
        r => r.temp < range.min || r.temp > range.max
    );
}
