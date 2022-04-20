{baseLoading[0] ? (
    <TouchableOpacity
        style={[styles.logoHolder, { top: hp(’20%’), right: wp(‘20%’) }]}
        onPress={() => {
            setBase(0)
            setIsVisible(true)
        }}>
        <Image
            source={!team ? findIcon(hometeamlogo) : findIcon(awayteamlogo)}
            style={styles.hometeamlogo}
            resizeMode={‘contain’}
        />
    </TouchableOpacity>
) : null}
{baseLoading[1] ? (
    <TouchableOpacity
        style={[styles.logoHolder, { top: hp(’12%’) }]}
        onPress={() => {
            setBase(1)
            setIsVisible(true)
        }}>
        <Image
            source={!team ? findIcon(hometeamlogo) : findIcon(awayteamlogo)}
            //prettier-ignore
            style={styles.hometeamlogo}
            resizeMode={‘contain’}
        />
    </TouchableOpacity>
) : null}
{baseLoading[2] ? (
    <TouchableOpacity
        style={[styles.logoHolder, { top: hp(’20%’), left: wp(‘18%’) }]}
        onPress={() => {
            setBase(2)
            setIsVisible(true)
        }}>
        <Image
            source={!team ? findIcon(hometeamlogo) : findIcon(awayteamlogo)}
            //prettier-ignore
            style={[styles.hometeamlogo, ]}
            resizeMode={‘contain’}
        />
    </TouchableOpacity>
) : null}