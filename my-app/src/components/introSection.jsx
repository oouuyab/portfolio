import React, { Component } from 'react';
import profile from '../img/profile.png';

class introSection extends Component {
  state = {
    individuality: '일상에서 얻은 작은 아이디어를 발전시키는 것을 즐기는',
    name: '유민규',
    profile: profile
  };
  render() {
    const { individuality, name, profile } = this.state;
    return (
      <>
        <img className="profile" src={profile} alt="" width="500px" />
        <div className="intro">안녕하세요.</div>
        <div>{individuality}</div>
        <div className="intro">{name} 입니다.</div>
      </>
    );
  }
}

export default introSection;
