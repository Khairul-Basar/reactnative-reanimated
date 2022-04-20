async function single() {
    playSound(‘ballhitcheer’, ‘single’)
    team ? setTeamOnePC(teamOnePC + 1) : setTeamTwoPC(teamTwoPC + 1)
    team ? setTeamOneHits(teamOneHits + 1) : setTeamTwoHits(teamTwoHits + 1)
    let baseTotal = baseLoading.reduce((acc, val) => acc + val)
    switch (baseTotal) {
        case 0: //[0,0,0]
            setBaseLoading([1, 0, 0])
            setResetter(resetter + 1)
            break
        case 3: //[1,1,1]
            await score(1)
            setBaseLoading([1, 1, 1])
            break
        case 2:
            // [1,1,0]
            if (baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
                await setBaseLoading([1, 1, 1])
                setResetter(resetter + 1)
                // [0,1,1]
            } else if (!baseLoading[0] && baseLoading[1] && baseLoading[2]) {
                await score(1)
                await setBaseLoading([1, 0, 1])
                // [1,0,1]
            } else if (baseLoading[0] && !baseLoading[1] && baseLoading[2]) {
                await score(1)
                await setBaseLoading([1, 1, 0])
            }
            break
        case 1:
            // [0,0,1]
            if (!baseLoading[0] && !baseLoading[1] && baseLoading[2]) {
                await score(1)
                await setBaseLoading([1, 0, 0])
                // [0,1,0]
            } else if (!baseLoading[0] && baseLoading[1] && !baseLoading[2]) {
                await setBaseLoading([1, 0, 1])
                setResetter(resetter + 1)
                // [1,0,0]
            } else if (baseLoading[0] && !baseLoading[1] && !baseLoading[2]) {
                await setBaseLoading([1, 1, 0])
                setResetter(resetter + 1)
            }
            break
    }
}