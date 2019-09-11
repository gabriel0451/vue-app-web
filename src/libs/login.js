import router from "../router";
import cookie from "../utils/cookie";

export default function toLogin(push, backUrl) {
    const { fullPath, name } = router.currentRoute;
    cookie.set("login_back_url", backUrl || fullPath);
    if (name !== "Login") {
        push
            ? router.push({ path: "/login" })
            : router.replace({ path: "/login" });
    }

}
