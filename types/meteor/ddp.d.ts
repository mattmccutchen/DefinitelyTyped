import DDP = _MeteorGlobals.DDP;
import DDPCommon = _MeteorGlobals.DDPCommon;

declare module "meteor/ddp" {
    import * as _MeteorDDP from "meteor/ddp";
    global {
        namespace _MeteorGlobals {
            export import DDP = _MeteorDDP.DDP;
            export import DDPCommon = _MeteorDDP.DDPCommon;
        }
    }

    module DDP {
        interface DDPStatic {
            subscribe(name: string, ...rest: any[]): Meteor.SubscriptionHandle;
            call(method: string, ...parameters: any[]): void;
            apply(method: string, ...parameters: any[]): void;
            methods(IMeteorMethodsDictionary: any): any;
            status(): DDPStatus;
            reconnect(): void;
            disconnect(): void;
            onReconnect(): void;
        }

        function _allSubscriptionsReady(): boolean;

        type Status = 'connected' | 'connecting' | 'failed' | 'waiting' | 'offline';

        interface DDPStatus {
            connected: boolean;
            status: Status;
            retryCount: number;
            retryTime?: number;
            reason?: string;
        }

        function connect(url: string): DDPStatic;
    }

    module DDPCommon {
        interface MethodInvocation {
            new (options: {}): MethodInvocation;

            unblock(): void;

            setUserId(userId: number): void;
        }
    }
}
