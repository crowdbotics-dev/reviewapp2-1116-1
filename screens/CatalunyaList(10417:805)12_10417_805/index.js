import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <TouchableOpacity
        style={styles.TouchableOpacity_10417_806}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("10417_821"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2fa8/470f/f0c57d53953e7c6cff2aa800b15d0df0"
          }}
          style={styles.ImageBackground_10417_807}
        />
        <View style={styles.View_10417_808}>
          <Text style={styles.Text_10417_808}>VALL DE NÚRIA</Text>
        </View>
        <View style={styles.View_10417_809}>
          <Text style={styles.Text_10417_809}>4:50</Text>
        </View>
        <View style={styles.View_10417_810}>
          <Text style={styles.Text_10417_810}>90km</Text>
        </View>
        <View style={styles.View_10417_811}>
          <Text style={styles.Text_10417_811}>intermediate</Text>
        </View>
        <View style={styles.View_10417_812} />
        <View style={styles.View_10417_813}>
          <Text style={styles.Text_10417_813}>#</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_10417_814}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/38d1/ecee/c818b93419e22855ed53dd3bead7e8d6"
          }}
          style={styles.ImageBackground_10417_815}
        />
        <View style={styles.View_10417_816} />
        <View style={styles.View_10417_817}>
          <Text style={styles.Text_10417_817}>258 mountain routes</Text>
        </View>
        <View style={styles.View_10417_818}>
          <Text style={styles.Text_10417_818}>CATALUNYA</Text>
        </View>
      </View>
      <View style={styles.View_10417_819}>
        <TouchableOpacity
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69bd/1dbb/49a44b1974d67e7ace366d0e2605c46d"
          }}
          style={styles.TouchableOpacity_10417_820}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10417_856"))
          }
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 1)" },
  View_2: { height: hp("111%") },
  TouchableOpacity_10417_806: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("35%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10417_807: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%")
  },
  View_10417_808: {
    flexGrow: 1,
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10417_808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_809: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_10417_809: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_810: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_10417_810: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_811: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_10417_811: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_10417_812: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_10417_813: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_10417_813: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_814: {
    width: wp("100%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_10417_815: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_10417_816: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  View_10417_817: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_10417_817: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_10417_818: {
    flexGrow: 1,
    width: wp("89%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_10417_818: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_819: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_10417_820: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
