import { AppEvent, AppEventManager } from "./AppEventManager";

describe("EventManager", () => {
  it("should return singleton instance", () => {
    const instance = AppEventManager.getInstance();
    const instance2 = AppEventManager.getInstance();

    expect(instance).toBe(instance2);
  });

  it("can handle route change event", () => {
    const instance = AppEventManager.getInstance();
    const spyListener = jest.fn();

    instance.addListener(AppEventManager.AppEvent.RouteChange, spyListener);

    instance.dispatch({
      type: AppEventManager.AppEvent.RouteChange,
      detail: {
        route: "new-route",
        prevRoute: "old-route",
      },
    });

    expect(spyListener).toHaveBeenCalled();
    expect(spyListener).toHaveBeenCalledWith(
      AppEventManager.AppEvent.RouteChange,
      {
        route: "new-route",
        prevRoute: "old-route",
      }
    );
  });

  it("can handle open login modal event", () => {
    const instance = AppEventManager.getInstance();
    const spyListener = jest.fn();

    instance.addListener(AppEvent.OpenLoginModal, spyListener);

    instance.dispatch({
      type: AppEvent.OpenLoginModal,
      detail: {
        redirectUrl: "new-route",
      },
    });

    expect(spyListener).toHaveBeenCalled();
    expect(spyListener).toHaveBeenCalledWith(
      AppEventManager.AppEvent.OpenLoginModal,
      {
        redirectUrl: "new-route",
      }
    );
  });

  it("can handle open signup modal event", () => {
    const instance = AppEventManager.getInstance();
    const spyListener = jest.fn();

    instance.addListener(AppEvent.OpenSignupModal, spyListener);

    instance.dispatch({
      type: AppEvent.OpenSignupModal,
      detail: {
        redirectUrl: "new-route",
      },
    });

    expect(spyListener).toHaveBeenCalled();
    expect(spyListener).toHaveBeenCalledWith(
      AppEventManager.AppEvent.OpenSignupModal,
      {
        redirectUrl: "new-route",
      }
    );
  });

  it("can handle unknown event", () => {
    const instance = AppEventManager.getInstance();
    const spyListener = jest.fn();

    instance.addListener(AppEventManager.AppEvent.RouteChange, spyListener);

    instance.dispatch({
      type: "unknown" as any,
      detail: {
        route: "new-route",
        prevRoute: "old-route",
      },
    });

    expect(spyListener).not.toHaveBeenCalled();
  });

  it("can remove event listner", () => {
    const instance = AppEventManager.getInstance();
    const spyListener = jest.fn();

    instance.addListener(AppEventManager.AppEvent.RouteChange, spyListener);
    instance.removeListener(AppEventManager.AppEvent.RouteChange, spyListener);

    instance.dispatch({
      type: AppEventManager.AppEvent.RouteChange,
      detail: {
        route: "new-route",
        prevRoute: "old-route",
      },
    });

    expect(spyListener).not.toHaveBeenCalled();
  });
});
