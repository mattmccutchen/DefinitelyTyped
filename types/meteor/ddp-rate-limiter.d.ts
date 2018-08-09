import DDPRateLimiter = _MeteorGlobals.DDPRateLimiter;

declare module "meteor/ddp-rate-limiter" {
    import * as _MeteorDDPRateLimiter from "meteor/ddp-rate-limiter";
    global {
        namespace _MeteorGlobals {
            export import DDPRateLimiter = _MeteorDDPRateLimiter.DDPRateLimiter;
        }
    }

    module DDPRateLimiter {
        interface Matcher {
            type?: string | ((type: string) => boolean);
            name?: string | ((name: string) => boolean);
            userId?: string | ((userId: string) => boolean);
            connectionId?: string | ((connectionId: string) => boolean);
            clientAddress?: string | ((clientAddress: string) => boolean);
        }

        function addRule(matcher: Matcher, numRequests: number, timeInterval: number): string;

        function removeRule(ruleId: string): boolean;
    }
}
