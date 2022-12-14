"""Init

Revision ID: 2481bac948cd
Revises: 
Create Date: 2022-11-14 19:44:09.464914

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2481bac948cd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('lang',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('abbr', sa.String(length=10), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('word',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('lang_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['lang_id'], ['lang.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('translation',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=200), nullable=False),
    sa.Column('word_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['word_id'], ['word.id'], ondelete='CASCADE'),
    sa.PrimaryKeyConstraint('id', 'word_id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('translation')
    op.drop_table('word')
    op.drop_table('lang')
    # ### end Alembic commands ###
