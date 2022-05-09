// 의미있는 상수는 문자열 상수로 뽑자
// 하지만 함수안에서만 한번만 쓰인다면 이득이 줄어든다.


function potentialEnergy(mass, height) {
    return mass * 9.81 * height;
}

{
    const STANDARD_GRAVITY = 9.81;
    function potentialEnergy(mass, height) {
        return mass * STANDARD_GRAVITY * height;
    }
}

// aValue === 'M' => aValue === MALE_GENDER 보다는 isMale(aValue)함수로 만든는게 좋다.
