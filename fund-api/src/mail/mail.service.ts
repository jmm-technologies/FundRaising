import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { I18n, I18nService } from 'nestjs-i18n';
import { MailData } from './interfaces/mail-data.interface';

@Injectable()
export class MailService {
  constructor(
    @I18n()
    private readonly i18n: I18nService,
    private mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async userSignUp(mailData: MailData<{ eamil: string, password: string }>) {
    console.log(mailData);
    console.log(mailData.data.password[0]);
   
    await this.mailerService.sendMail({
      to: mailData.to,
      from: 'ullahmuhammad203@gmail.com',
      subject: await this.i18n.t('account credentials'),
      text: `${await this.i18n.t('eamil: ')}
       ${mailData.data.eamil} 
       ${await this.i18n.t('password: ')} 
       ${mailData.data.password}`,

      template: 'activation',
      context: {
        title: await this.i18n.t('account credentials'),
        email:  mailData.data.eamil,
        password: mailData.data.password,
      },
    });
  }

  async forgotPassword(mailData: MailData<{ hash: string }>) {
    await this.mailerService.sendMail({
      to: mailData.to,
      subject: await this.i18n.t('common.resetPassword'),
      text: `${this.configService.get('app.frontendDomain')}/password-change/${
        mailData.data.hash
      } ${await this.i18n.t('common.resetPassword')}`,
      template: 'reset-password',
      context: {
        title: await this.i18n.t('common.resetPassword'),
        url: `${this.configService.get('app.frontendDomain')}/password-change/${
          mailData.data.hash
        }`,
        actionTitle: await this.i18n.t('common.resetPassword'),
        app_name: this.configService.get('app.name'),
        text1: await this.i18n.t('reset-password.text1'),
        text2: await this.i18n.t('reset-password.text2'),
        text3: await this.i18n.t('reset-password.text3'),
        text4: await this.i18n.t('reset-password.text4'),
      },
    });
  }
}
