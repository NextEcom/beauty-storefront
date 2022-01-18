export enum AppEvent {
  RouteChange = "routeChange",
  OpenLoginModal = "openLoginModal",
  OpenSignupModal = "openSignupModal",
}

type DispatchEvent =
  | {
      type: AppEvent.RouteChange;
      detail: {
        route: string;
        prevRoute: string;
      };
    }
  | {
      type: AppEvent.OpenLoginModal | AppEvent.OpenSignupModal;
      detail?: {
        redirectUrl?: string;
      };
    };

type AppEventListener = (
  event: AppEvent,
  detail: DispatchEvent["detail"]
) => void;

export class AppEventManager {
  private static instance: AppEventManager;

  private listeners: {
    [event in AppEvent]?: AppEventListener[];
  } = {};

  private constructor() {
    //
  }

  public addListener(event: AppEvent, listener: AppEventListener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event]?.push(listener);
  }

  removeListener(RouteChange: AppEvent, listener: AppEventListener): void {
    if (!this.listeners[RouteChange]) {
      return;
    }

    this.listeners[RouteChange] = this.listeners[RouteChange]?.filter(
      (l) => l !== listener
    );
  }

  public dispatch(event: DispatchEvent): void {
    if (!this.listeners[event.type]) {
      return;
    }

    this.listeners[event.type]?.forEach((listener) => {
      listener(event.type, event.detail);
    });
  }

  public static getInstance(): AppEventManager {
    if (!AppEventManager.instance) {
      AppEventManager.instance = new AppEventManager();
    }

    return AppEventManager.instance;
  }

  public static readonly AppEvent = AppEvent;
}
