import Email = _MeteorGlobals.Email;
import MailComposerOptions = _MeteorGlobals.MailComposerOptions;
import MailComposer = _MeteorGlobals.MailComposer;
import MailComposerStatic = _MeteorGlobals.MailComposerStatic;

declare module "meteor/email" {
    import * as _MeteorEmail from "meteor/email";
    global {
        namespace _MeteorGlobals {
            export import Email = _MeteorEmail.Email;
            export import MailComposerOptions = _MeteorEmail.MailComposerOptions;
            export import MailComposer = _MeteorEmail.MailComposer;
            export import MailComposerStatic = _MeteorEmail.MailComposerStatic;
        }
    }

    module Email {
        function send(options: {
            from?: string;
            to?: string | string[];
            cc?: string | string[];
            bcc?: string | string[];
            replyTo?: string | string[];
            subject?: string;
            text?: string;
            html?: string;
            headers?: Object;
            attachments?: Object[];
            mailComposer?: MailComposer;
        }): void;
    }

    interface MailComposerOptions {
        escapeSMTP: boolean;
        encoding: string;
        charset: string;
        keepBcc: boolean;
        forceEmbeddedImages: boolean;
    }

    var MailComposer: MailComposerStatic;
    interface MailComposerStatic {
        new (options: MailComposerOptions): MailComposer;
    }
    interface MailComposer {
        addHeader(name: string, value: string): void;
        setMessageOption(from: string, to: string, body: string, html: string): void;
        streamMessage(): void;
        pipe(stream: any /** fs.WriteStream **/): void;
    }
}
