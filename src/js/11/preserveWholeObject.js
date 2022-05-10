{
    const low = aRoom.daysTempRange.low;
    const high = aRoom.daysTempRange.high;
    if (!aPlan.withinRange(low, high)) {
        alert.push("방 온도가 지정 범위를 벗어났습니다.");
    }

    class HeatingPlan {
        withinRange (bottom, top) {
            return (bottom >= this._temperatureRange.low && top <= this._temperatureRange.high);
        }

        xxNewWithinRange (aNumberRange) {
            return this.withinRange(aNumberRange.low, aNumberRange.high);
        }
    }
}

class HeatingPlan {

    withinRange (aNumberRange) {
        return (aNumberRange.low >= this._temperatureRange.low && aNumberRange.high <= this._temperatureRange.high);
    }
}

{
    if (!aPlan.withinRange(aRoom.daysTempRange)) {
        alert.push("방 온도가 지정 범위를 벗어났습니다.");
    }
}
{

    class HeatingPlan {
        xxNEWwithinRange (aPlan, tempRange) {
            const low = tempRange.low;
            const high = tempRange.high;
            const isWithinRange = aPlan.withinRange(low, high);
            return isWithinRange;
        }
    }

    const tempRange = aRoom.daysTempRange;
    const isWithinRange = aPlan.xxNEWwithinRange(tempRange);
    if (!isWithinRange) {
        alert.push("방 온도가 지정 범위를 벗어났습니다.");
    }



}
