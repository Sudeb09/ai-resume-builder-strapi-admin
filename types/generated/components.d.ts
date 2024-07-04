import type { Schema, Attribute } from '@strapi/strapi';

export interface EducationEducation extends Schema.Component {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
    icon: 'book';
  };
  attributes: {
    universityName: Attribute.String;
    startDate: Attribute.String;
    endDate: Attribute.String;
    degree: Attribute.String;
    major: Attribute.String;
  };
}

export interface InterestInterest extends Schema.Component {
  collectionName: 'components_interest_interests';
  info: {
    displayName: 'Interest';
    icon: 'earth';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface LanguageLanguage extends Schema.Component {
  collectionName: 'components_language_languages';
  info: {
    displayName: 'Language';
    icon: 'emotionHappy';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface ProjectProject extends Schema.Component {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
    icon: 'briefcase';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
  };
}

export interface SkillsSkills extends Schema.Component {
  collectionName: 'components_skills_skills';
  info: {
    displayName: 'Skills';
    icon: 'crown';
  };
  attributes: {
    name: Attribute.String;
    rating: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'education.education': EducationEducation;
      'interest.interest': InterestInterest;
      'language.language': LanguageLanguage;
      'project.project': ProjectProject;
      'skills.skills': SkillsSkills;
    }
  }
}
