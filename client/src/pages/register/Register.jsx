import { Link } from "react-router-dom";
import "./Register.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerAccount } from "../../store/account/accountActions";
import { clearStatusState } from "../../store/account/accountSlice";
import LoaderImg from "../../assets/images/loaderImg.svg";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <img src={LoaderImg} />
        </div>
      ) : (
        <>
          {status ? (
            <div className="register">
              <div className="box__error">
                <h3>An error occured!</h3>
                <button onClick={() => dispatch(clearStatusState())}>
                  Try again!
                </button>
              </div>
            </div>
          ) : (
            <div className="register">
              <div className="card">
                <div className="left">
                  <h1>Koala Social</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Facere iure architecto quo maxime, atque, consequatur ut
                    dolor sint fugit quos ratione quis! Aperiam totam
                    perferendis a voluptatem temporibus laboriosam iste.
                  </p>
                  <span>Do you have an account?</span>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </div>
                <div className="right">
                  <h1>Register</h1>
                  <form>
                    <input
                      type="text"
                      placeholder="Username"
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                    <button
                      onClick={() =>
                        dispatch(registerAccount({ user, navigate }))
                      }
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Register;
