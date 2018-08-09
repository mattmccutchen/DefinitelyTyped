declare module "meteor/meteor" {
    namespace Meteor {
        export const isGlobalTest: boolean;
    }
}

if (Meteor.isServer) {
    console.log(Meteor.isGlobalTest);
}
